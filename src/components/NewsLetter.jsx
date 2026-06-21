function Newsletter() {

return (

<section className="bg-black text-white py-20">

<div className="max-w-4xl mx-auto text-center px-6">

<h2 className="text-4xl font-bold">

Stay Updated

</h2>


<p className="mt-4 text-gray-300">

Get updates on new arrivals and offers.

</p>


<div className="mt-8 flex flex-col md:flex-row gap-4">

<input
type="email"
placeholder="Enter email"
className="flex-1 p-4 rounded text-black"
/>


<button
className="bg-white text-black px-8 rounded"
>

Subscribe

</button>

</div>

</div>

</section>

)

}

export default Newsletter