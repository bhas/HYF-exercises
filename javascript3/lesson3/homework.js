let screenshotUrl = null;

async function onScreenshotBtnClick() {
    const url = document.getElementById('urlInput').value;
    screenshotUrl = await fetchScreenshot(url);
    document.getElementById('screenshotImg').src = screenshotUrl;
}

async function onSaveScreenshotBtnClick() {
    const url = document.getElementById('urlInput').value;
    const data = {
        url: url,
        screenshotUrl: screenshotUrl
    }
    await saveResource('/screenshots', data);
}

async function onDeleteBtnClick() {
}

async function loadScreenshots() {
    const screenshotContainer = document.getElementById('screenshotContainer');
    const data = {
        url: url,
        screenshotUrl: screenshotUrl
    }
    const screenshots = await fetchResources('/screenshots');
    screenshotContainer.innerHTML = `
    awda 
    awd a dw ad
    `

}


async function fetchScreenshot(website) {
    const encodedUrl = encodeURIComponent(website);
    const url = `https://website-screenshot6.p.rapidapi.com/screenshot?url=${encodedUrl}&width=1000&height=600`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': secrets.rapidApiKey,
            'X-RapidAPI-Host': 'website-screenshot6.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json);
        return json.screenshotUrl;
    } catch (error) {
        console.error(error);
    }
}

async function saveResource(path, data) {
    const url = `https://crudcrud.com/api/${secrets.crudcrudUid}${path}`;
    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error(error);
    }
}

async function fetchResources(path) {
    const url = `https://crudcrud.com/api/${secrets.crudcrudUid}${path}`;
    const options = {
        method: 'GET',
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error(error);
    }
}