
// 部署完成后在网址后面输入/，加上下方设置的mytoken=的值，即可获取聚合后的节点

let mytoken = 'auto'; //可根据需要自行设定，或者使用UUID在线生成网站进行生成：https://1024tools.com/uuid
let BotToken =''; //可以为空，或电报@BotFather关注机器人，输入/start，选择：/newbot进行获取
let ChatID =''; //可以为空，或电报@userinfobot中获取，选择：/start进行获取
let TG = 0; //新手勿动， 开发者选项，1 为推送所有的访问信息，0 为不推送订阅转换后端的访问信息与异常访问
let FileName = 'Pages-SUB-Convert';
let SUBUpdateTime = 6; //更改此次设置订阅更新时间，单位小时

//在以下输入您的自建节点链接或订阅链接，请保留双引号
let MainData = `
trojan://auto@42.98.167.229:12345?security=tls&sni=tg.cmliussss.us.kg&alpn=h3&fp=randomized&allowInsecure=1&type=ws&host=tg.cmliussss.us.kg&path=%2F%3Fed%3D2560#HKHKHKHKHKHKHKHKHKHK88888888
trojan://auto@[2a06:98c1:3121::326b:27e5]:443?security=tls&sni=tg.cmliussss.us.kg&alpn=h3&fp=randomized&allowInsecure=1&type=ws&host=tg.cmliussss.us.kg&path=%2F%3Fed%3D2560#HK-clone
trojan://auto@104.19.63.152:443?security=tls&sni=tg.cmliussss.us.kg&alpn=h3&fp=randomized&allowInsecure=1&type=ws&host=tg.cmliussss.us.kg&path=%2F%3Fed%3D2560#HKHKHKHKHKHKHKHKHKHK88888888-clone
trojan://auto@42.98.167.229:12345?security=tls&sni=tg.cmliussss.us.kg&alpn=h3&fp=randomized&allowInsecure=1&type=ws&host=tg.cmliussss.us.kg&path=%2F%3Fed%3D2560#HKHKHKH-60k
trojan://samsung@42.98.167.229:12345?security=tls&sni=cm2.5712360.xyz&fp=randomized&allowInsecure=1&type=ws&host=cm2.5712360.xyz&path=%2F%3Fed%3D2560#www.visa.com.sg-clone-66k
trojan://auto@42.98.167.229:12345?security=tls&sni=tg.cmliussss.us.kg&alpn=h3&fp=randomized&allowInsecure=1&type=ws&host=tg.cmliussss.us.kg&path=%2F%3Fed%3D2560#HK
trojan://auto@[2606:4700:3036:497f:483e:cd9f:88bf:6b52]:443?security=tls&sni=tg.cmliussss.us.kg&alpn=h3&fp=randomized&allowInsecure=1&type=ws&host=tg.cmliussss.us.kg&path=%2F%3Fed%3D2560#CT
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogInVzMDEiLA0KICAiYWRkIjogInh1aS4xMDEyNTgwMC54eXoiLA0KICAicG9ydCI6ICI0NDMiLA0KICAiaWQiOiAiNzFiMzJjZjUtMDcwZS00ZmYzLWQ0NjktMzc1NDI2NmYxMzVjIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJ4dWkuMTAxMjU4MDAueHl6IiwNCiAgInBhdGgiOiAiLzcxYjMyY2Y1IiwNCiAgInRscyI6ICJ0bHMiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogInVzMDMiLA0KICAiYWRkIjogInh1aS4xMDEyNTgwMC54eXoiLA0KICAicG9ydCI6ICI4NDQzIiwNCiAgImlkIjogIjc1MjMyNjQ0LTBlZWEtNDI1OS1hYTdlLWU3OWQ0ZDZhMTcyYiIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAieHVpLjEwMTI1ODAwLnh5eiIsDQogICJwYXRoIjogIi83NTIzMjY0NCIsDQogICJ0bHMiOiAidGxzIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogInVzMDEtY2xvbmUiLA0KICAiYWRkIjogIjEwNy4xNzIuOTQuMTQiLA0KICAicG9ydCI6ICI0NDMiLA0KICAiaWQiOiAiNzFiMzJjZjUtMDcwZS00ZmYzLWQ0NjktMzc1NDI2NmYxMzVjIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJ4dWkuMTAxMjU4MDAueHl6IiwNCiAgInBhdGgiOiAiLzcxYjMyY2Y1IiwNCiAgInRscyI6ICJ0bHMiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogInVzMDEtY2xvbmUtY2xvbmUiLA0KICAiYWRkIjogIjEwNC4xOS40MC4xMDkiLA0KICAicG9ydCI6ICI0NDMiLA0KICAiaWQiOiAiNzFiMzJjZjUtMDcwZS00ZmYzLWQ0NjktMzc1NDI2NmYxMzVjIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJ4dWkuMTAxMjU4MDAueHl6IiwNCiAgInBhdGgiOiAiLzcxYjMyY2Y1IiwNCiAgInRscyI6ICJ0bHMiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogInVzMDEtY2xvbmUiLA0KICAiYWRkIjogImNmLjA5MDIyNy54eXoiLA0KICAicG9ydCI6ICI0NDMiLA0KICAiaWQiOiAiNzFiMzJjZjUtMDcwZS00ZmYzLWQ0NjktMzc1NDI2NmYxMzVjIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJ4dWkuMTAxMjU4MDAueHl6IiwNCiAgInBhdGgiOiAiLzcxYjMyY2Y1IiwNCiAgInRscyI6ICJ0bHMiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogInVzMDEtY2xvbmUtY2xvbmUiLA0KICAiYWRkIjogImNmLjEwMTI1ODAwLnh5eiIsDQogICJwb3J0IjogIjQ0MyIsDQogICJpZCI6ICI3MWIzMmNmNS0wNzBlLTRmZjMtZDQ2OS0zNzU0MjY2ZjEzNWMiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogInh1aS4xMDEyNTgwMC54eXoiLA0KICAicGF0aCI6ICIvNzFiMzJjZjUiLA0KICAidGxzIjogInRscyIsDQogICJzbmkiOiAiIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiINCn0=
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogInVzMDEtY2xvbmUtY2xvbmUiLA0KICAiYWRkIjogImRucy4xMDEyNTgwMC54eXoiLA0KICAicG9ydCI6ICI0NDMiLA0KICAiaWQiOiAiNzFiMzJjZjUtMDcwZS00ZmYzLWQ0NjktMzc1NDI2NmYxMzVjIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJ4dWkuMTAxMjU4MDAueHl6IiwNCiAgInBhdGgiOiAiLzcxYjMyY2Y1IiwNCiAgInRscyI6ICJ0bHMiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogInVzMDEtY2xvbmUtY2xvbmUtY2xvbmUtY2xvbmUtY2xvbmUtY2xvbmUiLA0KICAiYWRkIjogIm1vbW9uLWdhLmNvbSIsDQogICJwb3J0IjogIjQ0MyIsDQogICJpZCI6ICI3MWIzMmNmNS0wNzBlLTRmZjMtZDQ2OS0zNzU0MjY2ZjEzNWMiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogInh1aS4xMDEyNTgwMC54eXoiLA0KICAicGF0aCI6ICIvNzFiMzJjZjUiLA0KICAidGxzIjogInRscyIsDQogICJzbmkiOiAiIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiINCn0=
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogInVzMDEtY2xvbmUtY2xvbmUtY2xvbmUtY2xvbmUiLA0KICAiYWRkIjogImRucy4xMDEyNTgwMC54eXoiLA0KICAicG9ydCI6ICI0NDMiLA0KICAiaWQiOiAiNzFiMzJjZjUtMDcwZS00ZmYzLWQ0NjktMzc1NDI2NmYxMzVjIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJ4dWkuMTAxMjU4MDAueHl6IiwNCiAgInBhdGgiOiAiLzcxYjMyY2Y1IiwNCiAgInRscyI6ICJ0bHMiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogInVzMDEtY2xvbmUiLA0KICAiYWRkIjogIjI2MDY6NDcwMDozMTE5Ojo2YjNmOjc3OTIiLA0KICAicG9ydCI6ICI0NDMiLA0KICAiaWQiOiAiNzFiMzJjZjUtMDcwZS00ZmYzLWQ0NjktMzc1NDI2NmYxMzVjIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJ4dWkuMTAxMjU4MDAueHl6IiwNCiAgInBhdGgiOiAiLzcxYjMyY2Y1IiwNCiAgInRscyI6ICJ0bHMiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjkxMSIsDQogICJhZGQiOiAiMTA3LjE3Mi45NC4xNCIsDQogICJwb3J0IjogIjQwMjYzIiwNCiAgImlkIjogImZlMDM4NDU3LTk2ZDktNDQ5NC1jMWYxLTZjZjRlNDY5MjdjOSIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiIiwNCiAgInBhdGgiOiAiL2ZlMDM4NDU3IiwNCiAgInRscyI6ICIiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIkhLXHUwMDNFIiwNCiAgImFkZCI6ICI0Mi45OC4xNjcuMjI5IiwNCiAgInBvcnQiOiAiMTIzNDUiLA0KICAiaWQiOiAiMDU2NDFjZjUtNThkMi00YmE0LWE5ZjEtYjNjZGEwYjFmYjFkIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJlOGI5OWNiZS05ZWJkLTRhMjAtYTQ5Ny0zOGY0YjI5ZjJjOTguODNiMTE3ODItZWNhZS00MTFmLTkwYzMtMmEwMWJiMzMyNjBhLmdsZWV6ZS5jb20iLA0KICAicGF0aCI6ICIvb2JkaWkuY2ZkOjQ0My9saW5rd3MiLA0KICAidGxzIjogInRscyIsDQogICJzbmkiOiAiZThiOTljYmUtOWViZC00YTIwLWE0OTctMzhmNGIyOWYyYzk4LjgzYjExNzgyLWVjYWUtNDExZi05MGMzLTJhMDFiYjMzMjYwYS5nbGVlemUuY29tIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiINCn0=
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlVTIiwNCiAgImFkZCI6ICI2OS44NC4xODIuMTMxIiwNCiAgInBvcnQiOiAiNDQzIiwNCiAgImlkIjogIjA1NjQxY2Y1LTU4ZDItNGJhNC1hOWYxLWIzY2RhMGIxZmIxZCIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiZThiOTljYmUtOWViZC00YTIwLWE0OTctMzhmNGIyOWYyYzk4LjgzYjExNzgyLWVjYWUtNDExZi05MGMzLTJhMDFiYjMzMjYwYS5nbGVlemUuY29tIiwNCiAgInBhdGgiOiAiL29iZGlpLmNmZDo0NDMvbGlua3dzIiwNCiAgInRscyI6ICJ0bHMiLA0KICAic25pIjogImU4Yjk5Y2JlLTllYmQtNGEyMC1hNDk3LTM4ZjRiMjlmMmM5OC44M2IxMTc4Mi1lY2FlLTQxMWYtOTBjMy0yYTAxYmIzMzI2MGEuZ2xlZXplLmNvbSIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9

`

//请将机场订阅链接填入上方
let urls = [];// https://subs.zeabur.app/clash , https://neko-warp.nloli.xyz/neko_warp.yaml

let subconverter = "apiurl.v1.mk"; //在线订阅转换后端，目前使用肥羊的订阅转换功能。支持自建psub 可自行搭建https://github.com/bulianglin/psub
let subconfig = "https://raw.githubusercontent.com/cmliu/ACL4SSR/main/Clash/config/ACL4SSR_Online_MultiCountry.ini"; //订阅配置文件，可自行更换

export default {
	async fetch (request,env) {
		const userAgentHeader = request.headers.get('User-Agent');
		const userAgent = userAgentHeader ? userAgentHeader.toLowerCase() : "null";
		const url = new URL(request.url);
		const token = url.searchParams.get('token');
		mytoken = env.TOKEN || mytoken;
		BotToken = env.TGTOKEN || BotToken;
		ChatID = env.TGID || ChatID; 
		TG =  env.TG || TG; 
		subconverter = env.SUBAPI || subconverter;
		subconfig = env.SUBCONFIG || subconfig;
		FileName = env.SUBNAME || FileName;
		MainData = env.LINK || MainData;
		if(env.LINKSUB) urls = await ADD(env.LINKSUB);

		let links = await ADD(MainData + '\n' + urls.join('\n'));
		let link = "";
		let linksub = "";
		
		for (let x of links) {
			if (x.toLowerCase().startsWith('http')) {
				linksub += x + '\n';
			} else {
				link += x + '\n';
			}
		}
		MainData = link;
		urls = await ADD(linksub);
		let sublinks = request.url ;
		//console.log(MainData,urls,sublinks);
		
		let warp = env.WARP ;
		if(warp && warp != "") sublinks += '|' + (await ADD(warp)).join('|');

		if ( !(token == mytoken || url.pathname == ("/"+ mytoken) || url.pathname.includes("/"+ mytoken + "?")) ) {
			if ( TG == 1 && url.pathname !== "/" && url.pathname !== "/favicon.ico" ) await sendMessage("#异常访问", request.headers.get('CF-Connecting-IP'), `UA: ${userAgent}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
			//首页改成一个nginx伪装页
			return new Response(`
			<!DOCTYPE html>
			<html>
			<head>
			<title>Welcome to nginx!</title>
			<style>
				body {
					width: 35em;
					margin: 0 auto;
					font-family: Tahoma, Verdana, Arial, sans-serif;
				}
			</style>
			</head>
			<body>
			<h1>Welcome to nginx!</h1>
			<p>If you see this page, the nginx web server is successfully installed and
			working. Further configuration is required.</p>
			
			<p>For online documentation and support please refer to
			<a href="http://nginx.org/">nginx.org</a>.<br/>
			Commercial support is available at
			<a href="http://nginx.com/">nginx.com</a>.</p>
			
			<p><em>Thank you for using nginx.</em></p>
			</body>
			</html>
			`, {
				headers: {
					'Content-Type': 'text/html; charset=UTF-8',
				},
			});
		} else if ( TG == 1 || !userAgent.includes('subconverter') || !userAgent.includes('null')){
			await sendMessage("#获取订阅", request.headers.get('CF-Connecting-IP'), `UA: ${userAgentHeader}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
		}

		let req_data = MainData;
		// 创建一个AbortController对象，用于控制fetch请求的取消
		const controller = new AbortController();

		const timeout = setTimeout(() => {
			controller.abort(); // 取消所有请求
		}, 1618); // 1.618秒后触发

		try {
			const responses = await Promise.allSettled(urls.map(url =>
				fetch(url, {
					method: 'get',
					headers: {
						'Accept': 'text/html,application/xhtml+xml,application/xml;',
						'User-Agent': `v2rayn/6.42 cmliu/CF-Workers-SUB ${userAgentHeader}`
					},
					signal: controller.signal // 将AbortController的信号量添加到fetch请求中，以便于需要时可以取消请求
				}).then(response => {
					if (response.ok) {
						return response.text().then(content => {
							// 这里可以顺便做内容检查
							if (content.includes('dns') && content.includes('proxies') && content.includes('proxy-groups') && content.includes('rules')) {
								//console.log("clashsub: " + url);
								sublinks += "|" + url;
							} else if  (content.includes('dns') && content.includes('outbounds') && content.includes('inbounds')){
								//console.log("singboxsub: " + url);
								sublinks += "|" + url;
							} else {
								return content; // 保证链式调用中的下一个then可以接收到文本内容
							}
						});
					} else {
						return ""; // 如果response.ok为false，返回空字符串
					}
				})
			));	
			//console.log(responses);
			for (const response of responses) {
				if (response.status === 'fulfilled') {
					const content = await response.value;
					req_data += base64Decode(content) + '\n';
				}
			}
		} catch (error) {
			//console.error(error);
		} finally {
			// 无论成功或失败，最后都清除设置的超时定时器
			clearTimeout(timeout);
		}
		//修复中文错误
		const utf8Encoder = new TextEncoder();
		const encodedData = utf8Encoder.encode(req_data);
		const text = String.fromCharCode.apply(null, encodedData);

		//去重
		const uniqueLines = new Set(text.split('\n'));
		const result = [...uniqueLines].join('\n');
		//console.log(result);

		const base64Data = btoa(result);
		//console.log(base64Data);

		//console.log("自建节点: " + MainData,"订阅链接: " + urls,"转换链接: " + sublinks);

		let target = "v2ray";
		if (userAgent.includes('clash') && !userAgent.includes('nekobox')) {
			target = "clash";
		} else if (userAgent.includes('sing-box') || userAgent.includes('singbox')) {
			target = "singbox";
		} else {
			return new Response(base64Data ,{
				headers: { 
					"content-type": "text/plain; charset=utf-8",
					"Profile-Update-Interval": `${SUBUpdateTime}`,
				}
			});
		}

		const subconverterUrl = `https://${subconverter}/sub?target=${target}&url=${encodeURIComponent(sublinks)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;

		try {
			const subconverterResponse = await fetch(subconverterUrl);
			
			if (!subconverterResponse.ok) {
				throw new Error(`Error fetching subconverterUrl: ${subconverterResponse.status} ${subconverterResponse.statusText}`);
			}
			
			const subconverterContent = await subconverterResponse.text();
			
			return new Response(subconverterContent ,{
				headers: { 
					"Content-Disposition": `attachment; filename*=utf-8''${encodeURIComponent(FileName)}; filename=${FileName}`,
					"content-type": "text/plain; charset=utf-8",
					"Profile-Update-Interval": `${SUBUpdateTime}`,
				}
			});
		} catch (error) {
			return new Response(`Error: ${error.message}`, {
				status: 500,
				headers: { 'content-type': 'text/plain; charset=utf-8' },
			});
		}

	}
};

async function sendMessage(type, ip, add_data = "") {
	if ( BotToken !== '' && ChatID !== ''){
		let msg = "";
		const response = await fetch(`http://ip-api.com/json/${ip}?lang=zh-CN`);
		if (response.status == 200) {
			const ipInfo = await response.json();
			msg = `${type}\nIP: ${ip}\n国家: ${ipInfo.country}\n<tg-spoiler>城市: ${ipInfo.city}\n组织: ${ipInfo.org}\nASN: ${ipInfo.as}\n${add_data}`;
		} else {
			msg = `${type}\nIP: ${ip}\n<tg-spoiler>${add_data}`;
		}
	
		let url = "https://api.telegram.org/bot"+ BotToken +"/sendMessage?chat_id=" + ChatID + "&parse_mode=HTML&text=" + encodeURIComponent(msg);
		return fetch(url, {
			method: 'get',
			headers: {
				'Accept': 'text/html,application/xhtml+xml,application/xml;',
				'Accept-Encoding': 'gzip, deflate, br',
				'User-Agent': 'Mozilla/5.0 Chrome/90.0.4430.72'
			}
		});
	}
}

// 将 base64 编码的字符串转换为 utf-8 编码的字符
function base64Decode(str) {
	const bytes = new Uint8Array(atob(str).split('').map(c => c.charCodeAt(0)));
	const decoder = new TextDecoder('utf-8');
	return decoder.decode(bytes);
}

async function ADD(envadd) {
	var addtext = envadd.replace(/[	 "'|\r\n]+/g, ',').replace(/,+/g, ',');  // 将空格、双引号、单引号和换行符替换为逗号
	//console.log(addtext);
	if (addtext.charAt(0) == ',') addtext = addtext.slice(1);
	if (addtext.charAt(addtext.length -1) == ',') addtext = addtext.slice(0, addtext.length - 1);
	const add = addtext.split(',');
	//console.log(add);
	return add ;
}
