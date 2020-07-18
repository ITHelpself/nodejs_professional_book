const express = require('express');
const index = require('./router/index.js')
const greetMiddleware = require('./router/greet.js');
const greetingService = require('./model/greetingService.js');
const port = 3000;
const app = express();
// set view jade
app.set('view engine', 'ejs');
app.set('views', 'chapter3_express/views');
// routing
app.get('/', index.doSomething);
app.use('/api/ver1', greetMiddleware({greeting:"Hello"}));
app.use('/api/ver2/service1', greetMiddleware({
    service: new greetingService('Hello')
}));
app.use('/api/ver2/service2', greetMiddleware({
    service: new greetingService('Hi')
}));
// about
var links = [
    { href: 'http://recruit.framgia.vn/', text: 'Framgia Việt Nam Tuyển Dụng' },
    { href: 'https://www.facebook.com/FramgiaVietnam/', text: 'Framgia Việt Nam Facebook' },
    { href: 'https://viblo.asia/', text: 'Viblo by Framgia' },
    { href: '/', text: 'Text Link 1' },
    { href: '/', text: 'Text Link 2' },
    { href: '/', text: 'Text Link 3' },
    { href: '/', text: 'Text Link 4' },
];
var headline = 'Framgia Viet Nam';
var tagline = "IT là lĩnh vực công bình và không giới hạn, nơi mỗi cá nhân được chia sẻ cơ hội và nhìn nhận thông qua nỗ lực thực sự. Tận dụng những lợi thế của IT mang lại, chúng tôi không ngừng hoàn thiện, trở thành nền tảng cho sự phát triển dịch vụ toàn cầu.";
app.use('/about',(req, res) =>{
    res.render('index',{
        links: links,
        headline: headline,
        tagline: tagline,
    });
})
app.listen(port,( req, res,next)=>{
    console.log("server listening on port: "+ port);
});