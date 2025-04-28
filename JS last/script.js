let products = JSON.parse(localStorage.getItem('products')) || [];

        function saveProduct() {
            localStorage.setItem('product', JSON.stringify(products));
        }

        function renderProduct() {
            const tbody = document.querySelector('#productTable tbody');
            tbody.innerHTML = '';
            products.forEach((product, index) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                <td> ${product.name}</td>
                <td> ${product.description}</td>
                <td> ${product.price}</td>
                <td> ${product.category}</td>
                <td>
                    <button.onclick"editProduct(${index})">Edit </button>
                    <button.onclick"deleteProduct(${index})">Delete </button>
                </td>   
                 `;

                tbody.appendChild(row);
            });


        }



        function addProduct(event){
            event.preventDefault();

            const name = document.getElementById("productName").value;
            const description = document.getElementById("description").value;
            const price = document.getElementById("productPrice").value;
            const category = document.getElementById("productSelect").value;

            if(name || description || price || category){
                alert("Please fill all the Details");
                return;
            }
            const newProduct = {name, description, price, category};
            products.push(newProduct);
            saveProduct();
            renderProduct();
            document.getElementById(productForm).reset();
        }

        function editProduct(index){
            const product = products(index);
            document.getElementById('productName').value = product.name;
            document.getElementById('description').value = product.description;
            document.getElementById('productPrice').value = product.price;
            document.getElementById('productSelect').value = product.category;
        }

        saveProduct();
        renderProduct();
        form.onsubmit = addProduct();
        form.reset();


        function deleteProduct(index){
            if(confirm("Are u Sure you want to delete??")){
                products.splice(index,1);
                saveProduct();
                renderProduct();
            }
        }

        window.onload = () => {
            renderProduct();
            document.getElementById('productForm').onsubmit = addProduct();
        };