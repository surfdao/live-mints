import selfcore from "selfcore";

const client = new selfcore();
const gateway = new selfcore.Gateway(
  "MjQxNTk5NDYzODAwNTY5ODU2.GpaWjM.Yv6cm6hRDgPiHVW3bCnxyOL84dkdYTH38r0Ut0"
);

gateway.on("message", (m) => {
  if (m.channel_id === "1003652718327513118") {
    let content = m.content ? m.content : { embeds: [m.embeds[0]] };

    client.sendWebhook(
      "https://discord.com/api/webhooks/1025685888707080262/3RU8LHWGnNJEUo2L7HoUJpoKEg3z1OOlvFUQ5lZTguUjsifk2KBx0Jh7fl1wk9TJEMzj",
      content
    );
  }
});
