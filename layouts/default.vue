<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family:
    'Poppins',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

* {
  --primary: #F44336;
  --secondary: #35BDAC;
  --tertiary: #06092b;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

ul {
  padding: 0;
}

input, textarea {
  max-width: 100%;
  border: none;
  padding: 12px;
  font-family: 'Poppins', sans-serif;
  border-radius: 5px;
}

button {
  cursor: pointer;
  border: none;
  border-radius: 5px;
  outline: none;
  font-family: 'Poppins', sans-serif;
}


</style>
