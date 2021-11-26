buildCategoryProducts() {
    //filtrar categories ( vou passar clothes e techs, aqui vc passa qual category quer)
    const filteredCategories = this.state.data.categories.filter(category => category.name === 'clothes' || category.name === 'tech');

    let categoryProducts = [];

    //percorrer filtered. Pode ser com for.
    filteredCategories.forEach(category => {
      //percorrer products. Pode ser com for.
      category.products.forEach(product => {
        const categoryProduct = (<div key= {product.id} >
          {`${category.name} ${product.id}`}
        </div>);

        //adicionando div no array. Return vai quebrar a stack e sair do loop.
        categoryProducts.push(categoryProduct);
      })
    })
    return categoryProducts;
  } 