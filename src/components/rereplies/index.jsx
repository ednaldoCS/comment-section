import React,{useState} from 'react'
import Avatar from '../../images/avatars/image-amyrobson.png'

import ReplyBox from '../reply-box/'

function ReReplies({content, funcDelReply, replyKey, funcAddReply, addReply, firstCommentId}) {
	const [scoreReplies, setScoreRepleis]=useState(content.score)
	const [modalReReply, setModalReReply]=useState(false)
	content.score=scoreReplies


	function deleteReply(replyId){
		funcDelReply(undefined,replyKey)
	}

	function reReply(){
		setModalReReply(!modalReReply)
		// console.log('Parent comment --- ' + replyKey)
	}

	function addReReply(e, childId, replyTo){
		addReply(e, content.id, childId, content.type, firstCommentId)
	}
	return (
		<>
			<div className='re-replies--box'>
				<div className='replies-score'>
					<button onClick={()=>setScoreRepleis(scoreReplies+1)}>+</button>
					<div>{content.score}</div>
					<button onClick={()=>setScoreRepleis(scoreReplies-1)}>-</button>
				</div>

				<div className='user--re-replies'>
					<div className='user--re-replies-info'>
						<img src={require('../../images/avatars/image-amyrobson.png')} alt="avatar"/>
						<h2>{content.user.username}</h2>
						<span className='re-replies--time'>{content.createdAt}</span>

						{content.user.username !== localStorage.currentUser ? <button className='btn-replyit' onClick={()=>reReply()}><span className="material-icons">reply</span>Reply</button> : false }

						{localStorage.currentUser === content.user.username  
						? 
							<button className='btn-delete'  id={content.id} onClick={(e)=>{deleteReply(e.target.id)}}>Delete</button>
						: false}
					</div>
					<div className='re-replies--text'>
						{content.content}
					</div>
				</div>
			</div>
		</>
	)
}

export default ReReplies 