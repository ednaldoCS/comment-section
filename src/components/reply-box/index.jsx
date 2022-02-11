import React,{useState} from 'react'
import ReplyUserAvatar from '../../images/avatars/image-juliusomo.png'


if(localStorage.id == null || localStorage.id==undefined){
	localStorage.id=4
}

function ReplyBox({id,funcAddReply, funcAddReReply, type, setModal}) {
	const [replyText, setReplyText]=useState('')
	const [reReplyTo, setReReplyTo]=useState()
	let date= new Date()
	let hora= date.getHours()
	let min= date.getMinutes()
	const cretatedAt= `${hora} :${min}`

	let replyTo= id.split('-')
	
	function addReply(){
		let id=parseInt(localStorage.id)
		localStorage.id=id+1

		setModal(false)

		funcAddReply({
          "id":localStorage.id,
          "content": replyText,
          "createdAt":cretatedAt,
          "score": 0,
          "replyingTo": replyTo[1],
          "user": {
            "image": { 
              "png": ReplyUserAvatar,
            },
            "username": localStorage.currentUser
          },
          "type":"reply"
        }, replyTo[0])
		
	}


	function addReReply(){
		let id=parseInt(localStorage.id)
		localStorage.id=id+1
		setModal(false)

		// console.log(localStorage.id)

		funcAddReReply({
          "id":localStorage.id,
          "content": replyText,
          "createdAt":cretatedAt,
          "score": 0,
          "replyingTo": replyTo[1],
          "user": {
            "image": { 
              "png": ReplyUserAvatar,
            },
            "username": localStorage.currentUser
          },
          "type":"re-reply"
        },parseInt(localStorage.id), replyTo[0], true)
	}

	return (
		<div className='reply--box'>
			<div className='user--reply-avatar'>
				<img src={ReplyUserAvatar} alt="reply user avatar"/>	
			</div>
			<div>
				<textarea name="reply" id="reply" value={replyText} onChange={(e)=>setReplyText(e.target.value)} cols="40" rows="5"></textarea>
			</div>
			<button className='btn--reply' type={type} onClick={type === 'comment' ? addReply : addReReply}>
				REPLY
			</button>
		</div>
	)
}

export default ReplyBox