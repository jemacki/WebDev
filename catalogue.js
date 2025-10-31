let items =
[
  {id: 1, title: "Coaster", price: 128.41, image_url: "Images/coaster.webp", description: "A minimal circular drink rest that protects surfaces while featuring a playful chicken motif."}, 
  {id: 2, title: "Ballchair", price: 337.92, image_url: "Images/ballchair.webp", description: "A sculpted chair by IMS, comfortable and rounded, paired with a matching ball footrest."}, 
  {id: 3, title: "The Bed.", price: 257.73, image_url: "Images/bed.webp", description: "A soft, single-stitched IMS piece offering simple, relaxed comfort."}, 
  {id: 4, title: "Bed2.", price: 94.66, image_url: "Images/bed2.webp", description: "A bag shaped with fast-food inspired design humor."}, 
  {id: 5, title: "The chair", price: 211.55, image_url: "Images/chair1.webp", description: "A chair formed from a UV-treated plant, blending the natural and surreal."}, 
  {id: 6, title: "desk", price: 441.38, image_url: "Images/desk.webp", description: "A wire-constructed desk with sculptural, airy structure."}, 
  {id: 7, title: "desk2", price: 182.47, image_url: "Images/desk2.webp", description: "A clean, black chair with simple modern lines."}, 
  {id: 8, title: "soft sofa.", price: 309.24, image_url: "Images/softsofa.webp", description: "Book-like forms combined into a sofa with a sense of hidden mystery."},
  {id: 9, title: "sofa", price: 423.05, image_url: "Images/sofa.webp", description: "Soft, inviting, and open to interpretation."}, 
  {id: 10, title: "Sofa", price: 147.82, image_url: "Images/sofa2.webp", description: "A chair shaped with playful nods to footwear form."},
  {id: 12, title: "Sofa3.", price: 268.90, image_url: "Images/sofa3.webp", description: "A compact wallet influenced by Colorado style and utility."},
  {id: 13, title: "Table1", price: 197.14, image_url: "Images/table1.webp", description: "A collection of plant-like textures forming a wearable concept piece."},
  {id: 14, title: "Table.", price: 115.63, image_url: "Images/table2.webp", description: "A minimal visual statement centered on simplicity and quiet space."},
  {id: 15, title: "The table3.", price: 376.49, image_url: "Images/table3.webp", description: "A small creature-inspired object with personal character."},
  {id: 16, title: "Tabl4", price: 229.70, image_url: "Images/table4.webp", description: "A piece defined by the presence and tone of blue itself."}
];


let itemList = document.getElementById("itemList");


const collageClasses = ["", "", "tall", "wide"];

items.forEach(item => {
  let extraClass = collageClasses[Math.floor(Math.random() * collageClasses.length)];

  let productCard = `
    <a href="product.html?id=${item.id}" class="product-link ${extraClass}">
        <Div class="product">
        <img src="${item.image_url}" alt="${item.title}">
        <div class="product-info">
          <h3>${item.title} $${item.price}</h3>
        </div>
      </div>
    </a>
  `;
  itemList.innerHTML += productCard;
});
