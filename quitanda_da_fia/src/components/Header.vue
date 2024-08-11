<template>
  <div id="container">
    <!-- Implement logo, search bar and cart button -->
    <div class="header">
      <img class="logo" src="/img/logo.png" alt="Logo da Quitanda da Fia">

      <div class="search_bar">
        <img id="magnifier" src="/img/magnifier.png" alt="Lupa do campo de pesquisa"/>
        <input type="text" placeholder="Digite sua pesquisa" />
        <button class="search_button">Buscar</button>
      </div>
    
      <button class="cart_button">
        <img id="cart_button_image" src="/img/cart_button.png" alt="Botão para direcionar ao carrinho"/>
      </button>
    </div>

    <!-- Implement available categories -->
    <div class="categories">
      <div class="category" v-for="category in categories" :key="category">
        <a :href="`#${category}`">{{ category }}</a>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            categories: ['Carnes', 'Frutas', 'Legumes', 'Verduras'],
        }
    },
}
</script>


<style scoped>
#container {
    background-color: #264B37;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0 0 8px 8px;
}

.logo {
    width: 15em;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    gap: 9em;
    margin-bottom: -3.2em;
}

/* Customize search bar */
.search_bar {
    background-color: #ffffff;
    padding: 0.8em 2em 0.8em 2em;
    border-radius: 3em;
    display: flex;
    align-items: center;
    gap: 1.5em;
}

/* Customize magnifier image */
#magnifier {
    width: 1.5em;
}

/* Customize input text */
input {
    border: none;
    font-size: 1.1em;
    font-weight: bold;
}


/* Customize search button "Buscar" */
.search_button {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    color: #264B37;
    font-size: 1.1em;
    font-weight: bold;
}

.search_button:hover {
    color: #e08516;;
}

/* Customize button to be done within the image limits */
.cart_button {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
}

/* Customize cart_button_image width */
#cart_button_image {
    width: 13em;
}

/* Customize categories */
.categories {
    display: flex;
    justify-content: space-between;
    padding: 1em;
    align-items: center;
}

.category {
    display: flex;
    padding: 1em 3em 1em 3em;
    font-size: 1.6em;
}

/* Customize link */
a {
    text-decoration: none;
    color: #ffffff;
    font-weight: bold;
    font-size: 0.9em;
}

a:hover {
    color: #e08516;
}

</style>