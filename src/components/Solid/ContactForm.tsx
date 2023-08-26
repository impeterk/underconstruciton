import { sendMail } from "../../server/mail";
import { createSignal, Component } from "solid-js";
export const ContactForm: Component = () => {
  const [name, setName] = createSignal("")
  const [email, setEmail] = createSignal("")
  const [message, setMessage] = createSignal("")

  const handleSubmit = (event: SubmitEvent) => {
    event.preventDefault()
    console.log(name(), email(), message())
    sendMail({ name: name(), email: email(), message: message() })
    setName("")
    setEmail("")
    setMessage("")
  }
  return (
    <form method="post" onSubmit={handleSubmit}>
      <div class="mb-4">
        <label for="name" class="block text-lg font-medium text-accent">Email</label>
        <input
          type="text"
          id="name"
          name="name"
          class="mt-1 px-3 py-2 w-full textarea textarea-accent"
          onInput={(e) => setName(e.target.value)}
          value={name()}
          required
        />
      </div>
      <div class="mb-4">
        <label for="email" class="block text-lg font-medium text-accent">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          class="mt-1 px-3 py-2 w-full textarea textarea-accent"
          onInput={(e) => setEmail(e.target.value)}
          value={email()}
          required
        />
      </div>
      <div class="mb-4">
        <label for="message" class="block text-lg font-medium text-accent">Message</label>
        <textarea
          id="message"
          name="message"
          rows="10"
          class="mt-1 px-3 py-2 w-full textarea textarea-accent"
          onInput={e => setMessage(e.target.value)}
          value={message()}
          required></textarea>
      </div>
      <div class="w-full flex justify-end">
        <button class="w-full md:w-3/5 btn-accent py-2 font-semibold text-2xl btn"
        >Send</button
        >
      </div>
    </form>
  )
}
