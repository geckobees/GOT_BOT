const edits = [
    
];

module.exports = {
    name: 'edit',
    description: 'generates a GOT edit',
    //devOnly: Boolean,
    //testOnly: Boolean,
    //deleted: Boolean,
    
    callback: (client, interaction) => {
        const random = Math.floor(Math.random() * edits.length);
        interaction.reply(edits[random]);
    },
}