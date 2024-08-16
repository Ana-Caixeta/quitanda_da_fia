<template>
    <div id="container">
        <!-- Left side: responsible for showing the user the selected products -->
        <div id="ordered_products">
        </div>

        <!-- Right side: responsible for showing the form and confirming the order -->
        <div id="order_information">
            <form action="">
                <label for="">Tipo de pagamento</label>
                <div class="payment_info">
                    <input type="radio" name="payment" id="payment">
                    <label for="">Pagamento com cartão</label>
                </div>

                <div class="payment_info">
                    <input type="radio" name="payment" id="payment">
                    <label for="">Pagamento com cartão</label>
                </div>

                <label for="">Informações de entrega</label>
                <input type="text" name="address" id="address" placeholder="Endereço da entrega">

                <label for="">Telefone para contato</label>
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
    padding: 1em;
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
    color: #264B37;
}

.elements_side_by_side {
    display: flex;
    justify-content: space-between;
}
</style>
