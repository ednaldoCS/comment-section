import React,{useState, useEffect} from 'react';
import Comment from './components/comment/'
import ReplyBox from './components/reply-box/'
import './App.css'

import Dados from './data.json'
  
function  App() {
	const [items, setItems]=useState(Dados)
	const [comments, setCommets]=useState(items.comments)
	const [replies, setReplies]=useState()


	function setCurrentUser(){
		localStorage.currentUser=items.currentUser.username
	}

	function addReply(reply, parentId, chidId,type,commentId){
		console.log({
			reply,
			parentId,
			chidId,
			type,
			commentId
		})
		if(type === 'comment'){
			items.comments[commentId].replies.push(reply)
			setReplies(reply)
			console.log(replies)


			// items.comments.filter((item)=>{

			// 	if(item.id==commentId){
			// 		item.replies.push(reply)
			// 		setReplies(reply)
			// 		console.log(replies)
			// 	}

			// 	// console.log(replies)
			// })
		}else if(type==='reply'){
			// console.log(parentId, chidId)
			items.comments[commentId].replies.forEach((item)=>{
				if(item.id==parentId){
					item.rereply.push(reply)
					setReplies(reply)
					console.log(replies)
				}
			})
			

				console.log(comments)
			// })
		}
	}

	function firstFuncDeleteReply(firstCommentId, replyId){
		console.log(comments[firstCommentId].replies)
		console.log(replies)
		let newReplies=comments[firstCommentId].replies.splice(replyId,1)

		setReplies(newReplies)
	}



	setCurrentUser()


	return (
		<div className='comment-section'>
			{comments.map((item,key)=>(
				<Comment content={item} replies={replies} key={key} commentId={key} addReply={addReply} firstFuncDeleteReply={firstFuncDeleteReply}/>
			))}
		</div>
	)
}

export default  App; 