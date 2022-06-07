import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {id:'p1',price:6,title:'Book',description:'Bestseller book since last 10 years'},
  {id:'p2',price:15,title:'Story Book',description:'Story of ant and elephant'}
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(i => (<ProductItem
          key= {i.id}
          id={i.id}
          title={i.title}
          price={i.price}
          description= {i.description}
        />))}
      </ul>
    </section>
  );
};

export default Products;
