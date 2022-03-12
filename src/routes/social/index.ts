interface video {
	title: string;
	thumbnail: string;
	id: string;
	description: string;
}

const apiKey = process.env.GOOGLE_API_KEY;
const playlistId = 'UUBm396dLk0qyLmkcUFkso3w';

async function getVideos(): Promise<video[]> {
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
		const items: any[] = json.items;
		const videos: video[] = items.map((item) => {
			const title = item.snippet.title;
			const thumbnail = item.snippet.thumbnails.high.url;
			const id = item.contentDetails.videoId;
			const description = item.snippet.description.split('\n')[0];
			const video: video = {
				title,
				thumbnail,
				id,
				description
			};
			return video;
		});
		return videos;
	} else {
		return [];
	}
}

/** @type {import("./index").RequestHandler} */
export const get = async () => {
	const videos: video[] = await getVideos();

	return {
		body: {
			videos: videos
		}
	};
};
