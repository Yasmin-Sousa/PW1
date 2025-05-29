var express = require('express');
var router = express.Router();

const listChannels = require('../public/json/channels.json');

router.get('/:channelName', function (req, res) {
    const ch = listChannels.find(f => f.id == req.params.channelName) ?? {
        "id": "unknown",
        "name": "Canal Desconhecido",
        "channelName": "canal-desconhecido"
    }

    res.render('channel', {
        user: req.query.u ? {
            name: req.query.u
        } : null,
        channel: ch ?? {
            "id": "unknown",
            "name": "Canal Desconhecido",
            "channelName": "canal-desconhecido"
        },
        title: "Fórum IFCE - #"+ch.channelName
    });
});

router.get('/', (req,res)=> {
    if (req.query.c) {
        const ch = listChannels.find(c => "#"+c.channelName == req.query.c) ?? {
            "id": "unknown",
            "name": "Canal Desconhecido",
            "channelName": "canal-desconhecido"
        }

        if (!req.query.u) return res.redirect('/channel/'+ch.id)
        else return res.redirect('/channel/'+ch.id+'?u='+encodeURIComponent(req.query.u))
    } else {
        if (!req.query.u) return res.redirect('/')
        else return res.redirect('/?u='+encodeURIComponent(req.query.u))
    }
})

module.exports = router;
