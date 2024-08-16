<template>
    <div id="category_products">
        <!-- Organize the section by categories -->
        <div v-for="(products, category, index) in productCategories" :key="category">
        <h2 id="category">{{ category }}</h2>
        
        <!-- Organize all products within your category -->
        <div id="products_by_category">

            <!-- Product card construction-->
            <div id="product_card" v-for="product in products.slice(0, visibleProducts[index])" :key="product.id" class="product">
                <img :src="product.photo" :alt="product.name" />
                
                <div id="product_information">
                    <p id="produc">{{ product.name }} - {{ product.unit }}</p>
                    <p>R${{ product.price }}</p>
                </div>

                <button id="add_to_cart">
                    <div id="cart_component">
                        <img src="/img/cart.png" alt="Imagem carrinho de compras"/>
                        <p>Adicionar</p>
                    </div>
                </button>
            </div>
        </div>

        <!-- This button is responsible for limiting how many products the user can see -->
        <div id="division_of_categories">
                <button v-if="visibleProducts[index] < products.length" @click="showMore(index)">
                    Veja mais
                </button>
        </div>
        </div>
    </div>
</template>

<script>
import productData from '/db/db.json';

export default {
    name: 'Product',
    data() {
        return {
            productCategories: [],
            visibleProducts: []
        };
    },
    created() {
        this.loadProducts();
    },
    methods: {
        // This method is responsible for loading a certain amount of products from db.json
        loadProducts() {
            this.productCategories = productData;
            this.visibleProducts = Object.keys(productData).map(() => 1);
        },
        // This method is responsible for increasing the amount of visible products
        showMore(index) {
            this.visibleProducts[index] += 1;
        }
    }
};
</script>

<style scoped>
/* Setting margins  */
#category_products {
    margin: 1em 0 3em 0;
}

/* Defining that products from each category are together */
#products_by_category {
    display: flex;
    gap: 1em;
}

#product_card {
    display: flex;
    flex-direction: column;    
    border: 1px #333;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    background-color: #fff;
    margin: 5px;
    padding: 1em;
    width: 20%;
    height: 20em;
}

#product_card img {
    width: 10em;
    height: 10em;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1em;
    display: block;
    margin: 0 auto;
    text-align: center;
}

/* Defining category  */
#category {
    text-align: left;
    margin: 2em 0 1.5em 0;
}

/* Line below the category name */
#category::after {
    content: "";
    display: block;
    width: 3em; 
    height: 0.3em;
    background-color: #264B37; 
    margin-top: 0.3em;
}

#division_of_categories {
    position: relative;
    text-align: center;
    margin-top: 2em;
}

#division_of_categories::after {
    content: "";
    display: block;
    width: 100%; 
    height: 0.3em;
    background-color: #264B37;
    position: absolute;
    top: 50%;
    left: 0;
    z-index: -1;
}

#division_of_categories button {
    position: relative;
    z-index: 1; 
    background-color: #264B37;
    color: #ffffff;
    border: none;
    padding: 0.5em 2em;
    font-size: 1.2em;
    font-weight: bolder;
    cursor: pointer; 
    border-radius: 0.5em; 
}

#product_information p{
    color: #264B37;
    font-size: 1.2em;
    font-weight: bold;
    text-align: left;
}

#add_to_cart {
    background-color: #264B37;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.8em;
    cursor: pointer;
    padding: 0.3em 1em 0.3em 1em;
}

#cart_component {
    display: flex;
    align-items: center;
}

#cart_component img {
    width: 3em;
    height: 3em;
    border-radius: 0;
    margin-right: 1em
}

#cart_component p {
    color: #ffffff;
    font-size: 1.4em;
    font-weight: bold;
    margin: 0;
}

</style>
