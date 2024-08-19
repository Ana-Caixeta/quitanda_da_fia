<template>
    <div id="container">
        <!-- Left side: responsible for showing the user the selected products -->
        <div id="ordered_products">
        </div>

        <!-- Right side: responsible for showing the form and confirming the order -->
        <div id="order_information">
            <form action="">
                <h3>Tipo de pagamento</h3>
                <div id="payment">
                    <div class="payment_info">
                        <input type="radio" name="payment" id="payment">
                        <label for="">Pagamento com cartão</label>
                    </div>
                    
                    <div ckass="payment_info">
                        <input type="radio" name="payment" id="payment">
                        <label for="">Pagamento com cartão</label>
                    </div>
                </div>
                
                <div id="delivery">
                    <h3>Informações de entrega</h3>
                    <div class="delivery_choice">
                        <input type="radio" name="delivery" id="pickup" value="pickup" v-model="deliveryMethod">
                        <label for="pickup">Retirada na loja</label>
                    </div>
                    
                    <div class="delivery_choice">
                        <input type="radio" name="delivery" id="delivery" value="delivery" v-model="deliveryMethod">
                        <label for="delivery">Entrega</label>
                    </div>

                    <!-- Show text input field only if "Entrega" was selected -->
                    <input v-if="deliveryMethod === 'delivery'" type="text" name="address" id="address" placeholder="Endereço da entrega">
                </div>

                <h3>Telefone para contato</h3>
                <input type="tel" name="tel_number" id="tel_number" placeholder="(99)99999-9999">
            </form>

            <h2>Resumo da compra</h2>
            <div class="elements_side_by_side">
                <p>Subtotal</p>
                <p>R$</p>
            </div>

            <div class="elements_side_by_side">
                <p>Entrega</p>
                <p>Gratuita</p>
            </div>

            <div class="elements_side_by_side">
                <h3>Total</h3>
                <h3>R$</h3>
            </div>

            <div class="elements_side_by_side">
                <button id="keep_shopping">
                    Continue comprando
                </button>

                <button id="finalize_order">
                    Finalizar pedido
                </button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "ShoppingCart",
    data() {
        return {
            deliveryMethod: '',
        }
    }
}
</script>

<style scoped>
#container {
    background-color: #264B37;
    border-radius: 8px;
    margin: 1em 0 1em 0;
    display: flex;
}

#order_information {
    background-color: #ffffff;
    border-radius: 8px;
    padding: 1em 3em 3em 3em;
    margin: 1em;
}

form {
    display: flex;
    flex-direction: column;
    font-size: 1.3em;
    font-weight: bold;
    text-align: left;
}

label {
    font-size: 1em;
    color: rgba(0, 0, 0, 0.50);
}

.payment_info, .delivery_choice {
    display: flex;
    margin: 0.3em 0 0.3em 0;
}

input[type="radio"] {
    appearance: none;
    -webkit-appearance: none;
    width: 1.3em;
    height: 1.3em;
    border: 2px solid #e08516;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    background-color: transparent;
    margin-right: 0.4em;
}

/* Style for when button is selected */
input[type="radio"]:checked {
    border: 2px solid #e08516;
}

/* Adds orange inner circle when selected */
input[type="radio"]:checked::before {
    content: "";
    position: absolute;
    top: 15%;
    left: 15%;
    width: 70%;
    height: 70%;
    border-radius: 50%;
    background-color: #e08516;
}

/* Change the color of labels when selected */
input[type="radio"]:checked + label {
    color: #264B37; 
    font-weight: bold; 
}

#address {
    width: 100%;
    height: 5em;
    text-align: left; 
    padding-left: 0.3em;
    padding-top: 0.3em;
    font-size: 0.8em;
    margin: 0.6em 0 0.6em 0;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.30);
}

#address::placeholder {
    font-size: 1em; 
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(0.3em, 0.3em);
    padding: 0.3em 0 0 0.3em;
}

#tel_number {
    width: 100%;
    height: 2em;
    font-size: 0.8em;
    padding-left: 0.3em;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.30);
}

#tel_number::placeholder{
    padding: 0.3em 0 0 0.3em;
}

.elements_side_by_side {
    display: flex;
    justify-content: space-between;
    gap: 1em;
}

h2, h3 {
    text-align: left;
    color: #264B37;
}

p {
    font-size: 1.1em;
}

#keep_shopping, #finalize_order {
    color: #ffffff;
    font-weight: bold;
    cursor: pointer;
    padding: 1em;
    border-radius: 8px;
    font-size: 1em;
}

#keep_shopping {
    background-color: #2A6A48;
    border: 1px solid #2A6A48;
}

#finalize_order {
    background-color: #264B37;
    border: 1px solid #264B37;
}
</style>
