const client = mqtt.connect('ws://192.168.91.115:9001');

client.on('connect', function () {
    console.log('Conectado ao broker MQTT');
    client.subscribe('test', function (err) {
        if (!err) {
            console.log('Inscrito no tópico: test');
        }
    });
});

client.on('message', function (topic, message) {
    // mensagem é um buffer
    console.log(`Mensagem recebida no tópico '${topic}': ${message.toString()}`);
});
