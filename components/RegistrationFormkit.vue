<script setup>
import { createZodPlugin } from "@formkit/zod";
import { z } from "zod";

const zodSchema = z.object({
  personalInfo: z.object({
    firstName: z.string().min(3).max(25),
    lastName: z.string().min(3).max(25),
  }),
  email: z.string().email(),
  arrayMin: z.string().array().min(2),
});

const [zodPlugin, submitHandler] = createZodPlugin(
  zodSchema,
  async (formData) => {
    // fake submit handler, but this is where you
    // do something with your valid data.
    await new Promise((r) => setTimeout(r, 2000));
    alert("Form was submitted!");
    console.log(formData);
  }
);
</script>

<template>
  <h1 class="mb-4 font-semibold text-gray-400 text-2xl">Registeren</h1>
  <FormKit type="form" :plugins="[zodPlugin]" @submit="submitHandler">
    <FormKit type="group" name="personalInfo">
      <FormKit
        validation-visibility="live"
        type="text"
        name="firstName"
        label="First Name"
      />
      <FormKit type="text" name="email" label="Your email" />
      <FormKit
        type="password"
        name="password"
        label="Password"
        help="Enter a new password"
      />
    </FormKit>
  </FormKit>
</template>
