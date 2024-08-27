// export const GET = async ({ params, request }) => {
//   const profileResponse = await fetch("https://api.github.com/users/musca");
//   const profile = await profileResponse.json();

//   const reposResponse = await fetch("https://api.github.com/users/musca/repos");
//   const repos = await reposResponse.json();

//   const langs = [];
//   repos.map((repo) => langs.push(repo.language));
//   const uniqueLangs = [...new Set(langs)];
//   const langsHtml = uniqueLangs.map((lang) => `<span>${lang}</span>`)

//   if (request.headers.get("Content-Type") !== "application/json") {
//     const langs = [];
//     repos.map((repo) => langs.push(repo.language));
//     const uniqueLangs = [...new Set(langs)];
//     const langsHtml = uniqueLangs.map((lang) => `<span>${lang}</span>`)

//     return new Response(`
//         <h1>This was a GET! ${profile.name}</h1>
//         <img src=${profile.avatar_url} width="140" height="140" loading="lazy">
//         <div class="github-langs">${langsHtml.join(' ')}</div>
//         <button>Klicka på mig</button>
//       `,
//       {
//         status: 200,
//         headers: {
//           "Content-Type": "text/html"
//         }
//       },
//     )
//   }

//   const body = await request.json();
//     const name = body.name;
//     return new Response(JSON.stringify({
//       message: "Your name was: " + name
//     }), {
//       status: 200
//     })
// }
