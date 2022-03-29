var express = require('express');
const { json } = require('express/lib/response');
var app = express();
var fs = require('fs');

app.get('/listele', function(req,res){
    //res.send('kullanicilari listeleyen cagri');
    fs.readFile('user.json','utf8',function(err,data){
        console.log(data);
        res.end(data);
    });
});

app.get('/ekle', function(req,res){
    //res.end('kullanici ekleyen cagri');
    var yenikullanıcı = {
        "kullanici3":{
            "isim" : req.query.isim,
            "sifre" : req.query.sifre,
            "email" : req.query.email
        }
    };
    fs.readFile('user.json','utf8',function(err,data){
        data = JSON.parse(data);
        data["kullanici3"] = yenikullanıcı["kullanici3"];
        console.log(data);
        res.end(JSON.stringify(data));
        fs.writeFile('user.json',JSON.stringify(data),function(err){
                console.log('Bir hata olustu!!!');
        });
    });
});

app.get('/sil', function(req,res){
    //res.end('kullanici silen çağrı');
    fs.readFile('user.json','utf8',function(err,data){
        data = JSON.parse(data);
        var id = "kullanici" + req.query.id;
        data[id];
        console.log(data);
        res.end(JSON.stringify(data));
        fs.writeFile('user.json',JSON.stringify(data),function(err){
                console.log('Bir hata olustu!!!');
        });
    });
});

app.get('/sorgula', function(req,res){
    //res.end('kullanici sorgulayan cagri');
    fs.readFile('user.json','utf8',function(err,data){
        data = JSON.parse(data);
        var id = "kullanici" + req.query.id;
        data[id];
        console.log(data[id]);
        res.end(JSON.stringify(data[id]));
        });
    });

var server=app.listen(8000, function(){
    console.log('Sunucu oluşturuldu');
});

