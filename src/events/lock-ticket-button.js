module.exports = {
	name: 'clickButton',
	execute(button, channel) {
		if (button.id === "lock") {
			button.reply.send(channel.id)
			}
		},
};