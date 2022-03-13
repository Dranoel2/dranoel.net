/** @type {import('@sveltejs/kit').RequestHandler<{
 * memory: string?;
 * }>} */
export async function get({ url }) {
	let memory: string = url.searchParams.get('memory');
	if (memory == undefined) memory = '2';
	else {
		if (isNaN(+memory)) {
			return {
				status: 422,
				body: 'Not a number!'
			};
		}
	}

	const script = `#!/usr/bin/env bash
cd $(dirname $0)
java -Xms${memory}G -Xmx${memory}G -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1NewSizePercent=30 -XX:G1MaxNewSizePercent=40 -XX:G1HeapRegionSize=8M -XX:G1ReservePercent=20 -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=4 -XX:InitiatingHeapOccupancyPercent=15 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=5 -XX:SurvivorRatio=32 -XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1 -Dusing.aikars.flags=https://mcflags.emc.gs -Daikars.new.flags=true -jar server.jar nogui`;
	return {
		status: 200,
		body: script
	};
}
