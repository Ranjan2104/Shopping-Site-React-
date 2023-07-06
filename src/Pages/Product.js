import React, { useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import ProductCard from '../Components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import {actionCreator} from '../States/actionIndex';
import {ProductData} from '../API/index'

const Product = () => {
  const storeData = useSelector((state) => state.getProductData);
  const dispatch = useDispatch();

  useEffect(() => {
   (async () => {
    const res = await ProductData.getData({url : 'https://fakestoreapi.com/products/'});
    dispatch(actionCreator.getData(res?.data))
   })();
  }, [])
  
  return (
    <div>
      <section className='productMain'>
        <section className='leftPart'>
          <h2>Filters</h2>
          <div className='product-price-filter'>
            <div>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Price Filter</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className='product-price-filter-checkbox'>
                    <input className='inputcheckbox' type='checkbox' />
                    <span>{30}</span>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
          <div className='product-category-filter'>
            <div>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Category Filter</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className='product-price-filter-checkbox'>
                    <input className='inputcheckbox' type='checkbox' />
                    <span>{"Men"}</span>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
          <div className='product-rating-filter'>
            <div>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Rating Filter</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className='product-price-filter-checkbox'>
                    <input className='inputcheckbox' type='checkbox' />
                    <span>{"3 star"}</span>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
          <div className='product-apply-filter-btn'>
            <Button variant="outlined">Reset</Button>
            <Button variant="contained">Apply Filter</Button>
          </div>
        </section>
        <section className='rightPart'>
          {
            storeData.data.map((item, index) => {
              return (
                <ProductCard 
                  title={item.title} 
                  src={item.image} 
                  price={item.price}  
                  key={index}
                  rate={item.rating.rate}
                  count={item.rating.count}
                />
              )
            })
          }
        </section>
      </section>
    </div>
  )
}

export default Product