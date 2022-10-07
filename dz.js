router.post(
	"/isChecked",
	async (req,res)=>{
		try{
			const id = req.body
			const newToDo =await tod.updateOne((e)=>{
				if(e._id==id){
					e.isChecked= !e.isChecked
				}
			}) 
			res.status(200).message(data:newTodo)
		}
		catch(e){
			res.status(500).message(data:e)
		}
	}
)





router.post(
	"/Text",
	async (req,res)=>{
		try{
			const {id,text} = req.body
			const newToDo =await tod.updateOne((e)=>{
				if(e._id==id){
					e.text= text
				}
			}) 
			res.status(200).message(data:newTodo)
		}
		catch(e){
			res.status(500).message(data:e)
		}
	}
)

router.delete(
 "/",
 async (req,res)=>{
		try{
			const id = req.body
			await tod.deleteone((e)=>e._id==id)
			res.status(200).message("win")
		}
		catch(e){
			res.status(500).message(data:e)
		}
	}
)
