'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion, AnimatePresence } from 'framer-motion'
import { Trash2 } from 'lucide-react'

type Comment = {
  id: string;
  author: string;
  text: string;
}

export default function Discussion() {
  const [comments, setComments] = useState<Comment[]>([
    { id: '1', author: "ClassicsFan", text: "The theme of fate vs. free will in Oedipus Rex is fascinating. Despite his efforts to avoid his destiny, Oedipus ends up fulfilling the prophecy. What do you think Sophocles is trying to say about human agency?" },
    { id: '2', author: "LiteraryScholar", text: "I find the character of Jocasta particularly tragic. Her attempts to dissuade Oedipus from pursuing the truth show her inner conflict between knowledge and blissful ignorance." }
  ])
  const [newComment, setNewComment] = useState('')
  const [authorName, setAuthorName] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.trim()) {
      const newCommentObj: Comment = {
        id: Date.now().toString(),
        author: authorName.trim() || "User",
        text: newComment
      }
      setComments([newCommentObj, ...comments])
      setNewComment('')
    }
  }

  const deleteComment = (id: string) => {
    setComments(comments.filter(comment => comment.id !== id))
  }

  return (
    <div className="space-y-12 p-6 bg-gray-900 text-white">
      <h1 className="font-playfair text-4xl sm:text-5xl font-bold mb-6 text-center">Discussion Board</h1>
      
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Share Your Thoughts</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Your Name (optional)"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              className="bg-gray-700 border-gray-600"
            />
            <Textarea 
              placeholder="Share your thoughts on Oedipus Rex..." 
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="min-h-[100px] bg-gray-700 border-gray-600"
            />
            <Button type="submit">Post Comment</Button>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <AnimatePresence>
          {comments.map((comment) => (
            <motion.div
              key={comment.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <p className="font-bold text-amber-400">{comment.author}</p>
                    {comment.author === "User" || (!["ClassicsFan", "LiteraryScholar"].includes(comment.author)) && (
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => deleteComment(comment.id)}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  <p className="text-gray-300">{comment.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}