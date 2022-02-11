    import React,{useState, useEffect} from 'react'
import Avatar from '../../images/avatars/image-amyrobson.png'
import Replies from '../replies/'
import ReplyBox from '../reply-box/'
function Comment({content, addReply, replies, firstFuncDeleteReply, commentId}) {
	const [score, setScore]=useState(content.score)
	const [modalReply, setModalReply]=useState(false)
	const [idReplyTo, setIdReplyto]=useState('')
	const [commentsContent, setCommentsContent]=useState(content)

	content.score=score


	// console.log(content)

	let id = 4

	function repliesTo(e){
		setModalReply(!modalReply)
		setIdReplyto(e) 
	}

	function addingReply(e){
		addReply(e, commentId , content.id, content.type, commentId) 
	}  

	function deleteReply(firstCommentId=commentId, replyId){
		firstFuncDeleteReply(firstCommentId,replyId)
	}

	// console.log(content)

	return (
		<>
			<div className='comment--box' >
				<div className='score'>
					<button onClick={()=>setScore(score+1)}>+</button>
					<div>{content.score}</div>
					<button onClick={()=>setScore(score-1)}>-</button>
				</div>

				<div className='user--comment'>
					<div className='user--info'>
						<img src={Avatar} alt="avatar"/>
						<h2>{content.user.username}</h2>
						<span className='comment--time'>{content.createdAt}</span>

						<button className='btn-replyit' id={content.id} onClick={(e)=>repliesTo(e.target.id)}>
							<span className="material-icons">reply</span>Reply
						</button>
					</div>
					<div className='comment--text'>
						{content.content}
					</div>
				</div>
			</div>
			{content.replies && content.replies.map((item,key)=>(
				<Replies content={item} key={key} replyKey={key} firstCommentId={commentId} funcDelReply={deleteReply} funcAddReReply={addingReply} addReply={addReply}/>
			))}

			{modalReply && <ReplyBox id={`${idReplyTo}-${content.user.username}`} funcAddReply={addingReply} type={content.type} setModal={setModalReply}/> }
		</>
	)
}

export default Comment 