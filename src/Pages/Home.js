import React from 'react'
import Cards from '../Components/Card'
import { Box, Paper } from '@mui/material'

const Home = () => {
  return (
    <div>
      <section className='homeCard'>
        <Cards 
          name={"Shirts"} 
          desc={"Versatile and timeless wardrobe staple for both men and women.They are typically made of comfortable."} 
          src={"https://images.unsplash.com/photo-1503341733017-1901578f9f1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"} 
        />
        <Cards 
          name={"Jeans"}
          desc= {"Popular type of pants that are loved for their durability, comfort, and timeless style. They are typically made of denim fabric."}
          src={"https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"}
        />
        <Cards 
          name={"Topwear"} 
          desc={"Broad category of clothing that covers the upper body. It includes various styles such as t-shirts, blouses."}
          src={"https://images.unsplash.com/photo-1492447166138-50c3889fccb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"} 
        />
      </section>
      <section>
        <Box
          sx={{
            p: 2,
            bgcolor: 'background.default',
            gridTemplateColumns: { md: '1fr 1fr' },
            margin:'2rem'
          }}
        >
          <Paper elevation={24} className='bannerPlaceholder'>
            <img  src='https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/category/catban-020230511180630.jpg?format=webp&w=1500&dpr=1.3' />
          </Paper>
        </Box>
      </section>
      <section className='bottomCards'>
        <Cards 
          name={"Pants"} 
          desc={"Clothing worn on the lower body, typically extending from the waist to the ankles or knees."} 
          src={"https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"} 
        />
        <Cards 
          name={"Footwear"}
          desc= {"Covering worn on the feet for protection, support, and comfort. It is an essential accessory."}
          src={"https://images.unsplash.com/photo-1603808033192-082d6919d3e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=415&q=80"}
        />
        <Cards 
          name={"Topwear"} 
          desc={"Broad category of clothing that covers the upper body. It includes various styles such as t-shirts, blouses."}
          src={"https://images.unsplash.com/photo-1492447166138-50c3889fccb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"} 
        />
        <Cards 
          name={"Watches"} 
          desc={"Timekeeping device that is worn on the wrist or carried in a pocket. It typically consists of a time display."} 
          src={"https://images.unsplash.com/photo-1594576722512-582bcd46fba3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"} 
        />
        <Cards 
          name={"Jeans"}
          desc= {"Popular type of pants that are loved for their durability, comfort, and timeless style. They are typically made of denim fabric."}
          src={"https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"}
        />
        <Cards 
          name={"Phones"} 
          desc={"Portable electronic device used for communication. It allows individuals to make and receive calls."}
          src={"https://images.unsplash.com/photo-1621330396173-e41b1cafd17f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGhvbmVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"} 
        />
      </section>
    </div>
  )
}

export default Home