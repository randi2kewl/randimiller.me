<script context="module">
  export const prerender = true;

  import { onMount } from 'svelte';

  import Title from '../components/title.svelte';

  let first_name = "";
  let last_name = "";
  let email = "";
  let phone = "";
</script>

<Title title="Contact Me" />

<form name="contact-form" method="post" autocomplete="on" action="/contact-success" netlify>

  <p class="hidden">
    <label>
      Don’t fill this out if you’re human: <input name="bot-field" />
    </label>
  </p>

  <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                  <label for="first_name" class="block text-sm font-medium text-gray-700">*First name</label>
                <input 
                    type="text" 
                    name="first_name" 
                    id="first_name" 
                    autocomplete="given-name" 
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    placeholder="Jane"
                    bind:value={first_name}
                    required
                >
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="last_name" class="block text-sm font-medium text-gray-700">*Last name</label>
                <input 
                   type="text" 
                   name="last_name" 
                   id="last_name" 
                   autocomplete="family-name" 
                   class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" 
                    placeholder="Doe"
                   bind:value={last_name}
                   required 
                >
              </div>

              <div class="col-span-6 sm:col-span-4">
                <label for="email" class="block text-sm font-medium text-gray-700">*Email address</label>
                <input 
                   type="email" 
                   name="email" 
                   id="email" 
                   autocomplete="email" 
                   class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholder="email@example.com"
                   bind:value={email}
                   required 
                >
              </div>

            <div class="col-span-6 sm:col-span-4">
              <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
              <input 
                type="tel" 
                name="phone" 
                id="phone" 
                autocomplete="tel" 
                placeholder="333-444-5555"
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                bind:value={phone}>
            </div>


            <div class="col-span-6 sm:col-span-4">
              <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
              <textarea 
                name="message" 
                id="message"
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm
                        border-gray-400 rounded-md"
                placeholder="A short message about the project needs or information that I should know prior to contacting you back."
                ></textarea>
            </div>

            </div>
          </div>

          
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">

            <a class="bg-transparent hover:bg-blue-600 text-blue-600 font-semibold hover:text-white py-2 px-4 border
               border-blue-600 hover:border-transparent rounded justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" 
               href="https://calendly.com/randimiller/30min?first_name={first_name}&last_name={last_name}&email={email}&location=+1{phone}"
               target="_blank">Schedule a call</a>
            or
            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm
                font-semibold rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none
                focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Get an email
            </button>
          </div>
        </div>

</form>
