interface video {
	title: string;
	thumbnail: string;
	id: string;
	description: string;
}

const apiKey = process.env.GOOGLE_API_KEY;
const playlistId = 'UUBm396dLk0qyLmkcUFkso3w';

async function getVideos(): Promise<video[]> {
	try {
		const response = await fetch(
			`https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails,snippet&playlistId=${playlistId}&key=${apiKey}`,
			{
				method: 'get',
				headers: {
					'content-type': 'application/json'
				}
			}
		);
		if (response.ok) {
			const json: any = await response.json();
			const videos: video[] = json.items.map((item) => {
				return {
					title: item.snippet.title,
					thumbnail: item.snippet.thumbnails.medium.url,
					id: item.contentDetails.videoId,
					description: item.snippet.description.split('\n')[0]
				};
			});
			return videos;
		} else {
			return [];
		}
	} catch (err) {
		console.error(err);
		return [];
	}
}

/** @type {import("./index").RequestHandler} */
export const get = async () => {
	return {
		body: {
			videos: await getVideos()
		}
	};
};
