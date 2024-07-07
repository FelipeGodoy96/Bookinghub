const CategoryCardMobile = ({category}) => {
    return (
        <div className="categories_card--mobile flex flex-col rounded-lg drop-shadow-md shadow-lg ">
    
        <img src={category.source} alt="" className='w-full h-60'/>

    
    <p className='m-4 font-semibold whitespace-nowrap overflow-ellipsis'>{category.categoria}</p>
    <p className='mx-4 mb-4 text-slate-500 text-sm whitespace-nowrap overflow-hidden'>{category.quantidade + ' encontrado(s)'}</p>
</div>
    )
}

export default CategoryCardMobile