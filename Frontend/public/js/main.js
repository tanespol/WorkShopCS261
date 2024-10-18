$(document).ready(function() {
    $.ajax({
        url: "http://localhost:8081/api/products", 
        method: "GET",
        success: function(data) {
            let productList = $("#product-list");
            data.forEach(function(product) {
                productList.append(`
                    <tr>
                        <td>${product.id}</td>
                        <td>${product.name}</td>
                        <td>${product.description}</td>
                        <td>${product.price}</td>
                    </tr>
                `);
            });
        },
        error: function(error) {
            console.log("Error fetching data", error);
        }
    });
});
