interface FabricVersion {
	url: string;
	maven: string;
	version: string;
	stable: boolean;
}

interface MinecraftVersion {
	version: string;
	stable: boolean;
}

/** @type {import('@sveltejs/kit').RequestHandler<{
 * version: string?;
 * }>} */
export async function get({ url }) {
	const fabricVersions = await fetch('https://meta.fabricmc.net/v2/versions/installer');
	const fabricJson: FabricVersion[] = await fabricVersions.json();
	const fabricStable: FabricVersion[] = fabricJson.filter((version: FabricVersion) => {
		return version.stable;
	});
	const fabricLatest: string = fabricStable[0].url;

	const minecraftVersions = await fetch('https://meta.fabricmc.net/v2/versions/game');
	const minecraftJson: MinecraftVersion[] = await minecraftVersions.json();
	const minecraftStable: MinecraftVersion[] = minecraftJson.filter((version: MinecraftVersion) => {
		return version.stable;
	});
	let minecraftLatest: string;
	const paramVersion = url.searchParams.get('version');
	if (paramVersion != undefined) {
		const versionStrings = minecraftJson.map((version) => {
			return version.version;
		});
		if (versionStrings.includes(paramVersion)) {
			minecraftLatest = paramVersion;
		} else {
			return {
				body: 'Version not found!',
				status: 404
			};
		}
	} else {
		minecraftLatest = minecraftStable[0].version;
	}

	const memory = url.searchParams.get('memory');
	if (memory !== undefined && isNaN(+memory)) {
		return {
			status: 422,
			body: 'Not a number!'
		};
	}

	const startScript = `${url.origin}/scripts/start.sh?memory=${memory || '2'}G`;

	const script = `#!/usr/bin/env bash
cd $(dirname $0)

wget -O fabric-installer.jar ${fabricLatest}
java -jar fabric-installer.jar server -mcversion ${minecraftLatest} -downloadMinecraft
rm fabric-installer.jar
mv server.jar vanilla.jar
mv fabric-server-launch.jar server.jar
echo "serverJar=vanilla.jar" > fabric-server-launcher.properties

wget -O start.sh ${startScript}
chmod +x start.sh`;

	return {
		status: 200,
		body: script
	};
}
