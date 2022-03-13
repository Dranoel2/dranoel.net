interface ProjectResponse {
	project_id: string;
	project_name: string;
	version_groups: string[];
	versions: string[];
}
interface VersionResponse {
	project_id: string;
	version: string;
	builds: number[];
}
/** @type {import('@sveltejs/kit').RequestHandler<{
 * version: string?;
 * memory: number?;
 * }>} */
export async function get({ url }) {
	const project = await fetch('https://papermc.io/api/v2/projects/paper');
	const projectJson: ProjectResponse = await project.json();
	const projectVersions: string[] = projectJson.versions;
	const projectVersion: string =
		url.searchParams.get('version') || projectVersions[projectVersions.length - 1];

	const version = await fetch(
		`https://papermc.io/api/v2/projects/paper/versions/${projectVersion}`
	);
	if (version.ok) {
		const versionJson: VersionResponse = await version.json();
		const versionBuilds: number[] = versionJson.builds;
		const versionBuild: number = versionBuilds[versionBuilds.length - 1];

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

wget -O server.jar https://papermc.io/api/v2/projects/paper/versions/${projectVersion}/builds/${versionBuild}/downloads/paper-${projectVersion}-${versionBuild}.jar

wget -O start.sh ${startScript}`;
		return {
			status: 200,
			body: script
		};
	} else {
		return {
			status: 404,
			body: 'Version not found!'
		};
	}
}
