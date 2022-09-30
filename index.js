import selfcore from "selfcore";

const client = new selfcore();
const gateway = new selfcore.Gateway(
  "MjQxNTk5NDYzODAwNTY5ODU2.GDl-TQ.fovLW94RxVlhfxdUBl4QutqOW5jqBQ5zvy2hdE"
);

gateway.on("message", (m) => {
  if (m.channel_id === "1003652718327513118") {
    let content = m.content ? m.content : { embeds: [m.embeds[0]] };

    client.sendWebhook(
      "https://discord.com/api/webhooks/1025099691031023636/Td_5vDAGy2YMoQjhnQfKyIvtgUaUeHy7Z9FYnwklb58AohNzFukyqWbPikTuEySbftmU",
      content
    );
  }
});