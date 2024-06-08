
const imageModel = require("../models/imageModel");

const generateImage = async (req, res) => {
    const body = req.body;
    const searchText = body.searchText;

    let imageUrl = "";
    try {
        const res = await fetch("https://api.hotpot.ai/art-maker-sdte-zmjbcrr", {
            "headers": {
                "accept": "/",
                "accept-language": "en-US,en;q=0.5",
                "api-token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MTc2ODkxNzksImV4cCI6MTcxNzc3NTU3OX0.-TVRJdrmCb6Bp3ZNGDZgBjQvZX4aNHJzXwtoxrhkOqk",
                "authorization": "hotpot-t2mJbCr8292aQzp8CnEPaK",
                "content-type": "multipart/form-data; boundary=----WebKitFormBoundarycQpR7rHXIexAbDzu",
                "sec-ch-ua": "\"Brave\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
                "sec-ch-ua-mobile": "?1",
                "sec-ch-ua-platform": "\"Android\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site",
                "sec-gpc": "1"
            },
            "referrer": "https://hotpot.ai/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "------WebKitFormBoundarycQpR7rHXIexAbDzu\r\nContent-Disposition: form-data; name=\"seedValue\"\r\n\r\nnull\r\n------WebKitFormBoundarycQpR7rHXIexAbDzu\r\nContent-Disposition: form-data; name=\"inputText\"\r\n\r\nbat\r\n------WebKitFormBoundarycQpR7rHXIexAbDzu\r\nContent-Disposition: form-data; name=\"width\"\r\n\r\n512\r\n------WebKitFormBoundarycQpR7rHXIexAbDzu\r\nContent-Disposition: form-data; name=\"height\"\r\n\r\n512\r\n------WebKitFormBoundarycQpR7rHXIexAbDzu\r\nContent-Disposition: form-data; name=\"styleId\"\r\n\r\n49\r\n------WebKitFormBoundarycQpR7rHXIexAbDzu\r\nContent-Disposition: form-data; name=\"styleLabel\"\r\n\r\nPhoto General 1\r\n------WebKitFormBoundarycQpR7rHXIexAbDzu\r\nContent-Disposition: form-data; name=\"isPrivate\"\r\n\r\nfalse\r\n------WebKitFormBoundarycQpR7rHXIexAbDzu\r\nContent-Disposition: form-data; name=\"price\"\r\n\r\n0\r\n------WebKitFormBoundarycQpR7rHXIexAbDzu\r\nContent-Disposition: form-data; name=\"requestId\"\r\n\r\n8-PkqtpO9vK9NaGhr\r\n------WebKitFormBoundarycQpR7rHXIexAbDzu\r\nContent-Disposition: form-data; name=\"resultUrl\"\r\n\r\nhttps://hotpotmedia.s3.us-east-2.amazonaws.com/8-PkqtpO9vK9NaGhr.png\r\n------WebKitFormBoundarycQpR7rHXIexAbDzu--\r\n",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        });

        imageUrl = await res.json();

        await imageModel.create({
            searchText: searchText,
        });
    }
    catch (err) {
        console.log(err);
    }

    res.json({
        status: 'success',
        data: {
            imageUrl: imageUrl,
        }
    })
}

const get1 = (req, res) => {
    res.json({
        status: 'success',
        data: {
            "imageUrl": "imageUrl",
        }
    })
}

module.exports = {
    generateImage, get1
}
