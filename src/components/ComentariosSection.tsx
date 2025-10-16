import { useState } from "react";
import svgPaths from "../imports/svg-p2ma82qtf";
import svgPathsSystem from "../imports/svg-p5bsbj20qf";
import { DeleteCommentModal } from "./DeleteCommentModal";

interface Comment {
  id: string;
  author: string;
  date: string;
  text: string;
  isSystem?: boolean;
  systemType?: "alert" | "status";
}

export function ComentariosSection() {
  const [comment, setComment] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [comments, setComments] = useState<Comment[]>([
    {
      id: "1",
      author: "Pedro Nunes",
      date: "10/10/2025 - 13:15",
      text: "mandei msg pro motorista, esperando resposta",
    },
    {
      id: "3",
      author: "PROLOG",
      date: "10/10/2025 - 13:11",
      text: "O status do alerta foi alterado para \"Em andamento\" por Pedro Nunes.",
      isSystem: true,
      systemType: "status",
    },
    {
      id: "2",
      author: "PROLOG",
      date: "10/10/2025 - 12:18",
      text: "Alerta gerado automaticamente pelo sistema devido à média de KM/L fora da faixa esperada",
      isSystem: true,
      systemType: "alert",
    },
  ]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [commentToDelete, setCommentToDelete] = useState<string | null>(null);

  const handleCancel = () => {
    setComment("");
    setIsFocused(false);
    setEditingId(null);
    setEditText("");
  };

  const handleSave = () => {
    if (comment.trim()) {
      const now = new Date();
      const dateStr = `${now.getDate().toString().padStart(2, '0')}/${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear()} - ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
      
      const newComment: Comment = {
        id: Date.now().toString(),
        author: "Você",
        date: dateStr,
        text: comment.trim(),
      };
      
      setComments([newComment, ...comments]);
      setComment("");
      setIsFocused(false);
    }
  };

  const handleEdit = (id: string) => {
    const commentToEdit = comments.find(c => c.id === id);
    if (commentToEdit && !commentToEdit.isSystem) {
      setEditingId(id);
      setEditText(commentToEdit.text);
    }
  };

  const handleSaveEdit = (id: string) => {
    if (editText.trim()) {
      setComments(comments.map(c => 
        c.id === id ? { ...c, text: editText.trim() } : c
      ));
      setEditingId(null);
      setEditText("");
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditText("");
  };

  const handleDeleteClick = (id: string) => {
    setCommentToDelete(id);
    setDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (commentToDelete) {
      setComments(comments.filter(c => c.id !== commentToDelete));
      setDeleteModalOpen(false);
      setCommentToDelete(null);
    }
  };

  const handleCancelDelete = () => {
    setDeleteModalOpen(false);
    setCommentToDelete(null);
  };

  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      {/* Input Section */}
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
          <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f424d] text-[16px] text-nowrap tracking-[0.32px]">
            <p className="leading-[22px] whitespace-pre">Comentários</p>
          </div>
        </div>
        
        <div className="content-stretch flex flex-col gap-[12px] items-end justify-center relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <div className="bg-white max-h-[118px] relative rounded-[8px] shrink-0 w-full">
              <div className="flex flex-row items-center max-h-inherit overflow-clip rounded-[inherit] size-full">
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  placeholder="Adicionar comentário..."
                  className={`box-border content-stretch flex gap-[8px] items-start max-h-inherit px-[16px] py-[10px] relative w-full resize-none bg-transparent border-none outline-none font-['Prompt:Light',_sans-serif] leading-[20px] text-[14px] tracking-[0.28px] ${
                    comment ? 'text-[#25262c]' : 'text-[#999dae]'
                  } placeholder:text-[#999dae]`}
                  rows={3}
                />
              </div>
              <div 
                aria-hidden="true" 
                className={`absolute inset-0 pointer-events-none rounded-[8px] ${
                  isFocused ? 'border-4 border-[#dee7fb]' : 'border-2 border-[#d8dadf]'
                } border-solid`}
              />
            </div>
          </div>

          {/* Buttons - Only show when focused or has text */}
          {(isFocused || comment) && (
            <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
              <button
                onClick={handleCancel}
                className="content-stretch flex items-start relative rounded-[8px] shrink-0 hover:bg-[#f5f6f8] transition-colors"
              >
                <div aria-hidden="true" className="absolute border border-[#3d5fd9] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0">
                  <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#3d5fd9] text-[12px] text-nowrap tracking-[0.24px] whitespace-pre">Cancelar</p>
                </div>
              </button>
              
              <button
                onClick={handleSave}
                disabled={!comment.trim()}
                className={`content-stretch flex items-start relative shrink-0 ${
                  comment.trim() ? 'hover:bg-[#3451c4] cursor-pointer' : 'opacity-50 cursor-not-allowed'
                } transition-colors`}
              >
                <div className="bg-[#3d5fd9] box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0">
                  <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-nowrap text-white tracking-[0.24px] whitespace-pre">Salvar</p>
                </div>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Comments List */}
      {comments.map((c) => (
        <div key={c.id} className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
          {/* Comment Header */}
          {c.isSystem ? (
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
              <div className="content-stretch flex gap-[4.8px] items-center relative shrink-0 size-[12px]">
                <div className="h-[15px] relative shrink-0 w-[12px]">
                  <div className="absolute bottom-[10%] content-stretch flex gap-[3px] items-start left-0 right-0 top-[10%]">
                    <div className="relative shrink-0 size-[12px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                        <g>
                          <path d={svgPathsSystem.pc88a00} fill="url(#paint0_linear_comment)" />
                          <g>
                            <path d={svgPathsSystem.p1ca2a600} fill="white" />
                            <path d={svgPathsSystem.p1c282b00} fill="white" />
                          </g>
                        </g>
                        <defs>
                          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_comment" x1="6.00123" x2="6.00123" y1="12.0024" y2="-3.79827e-05">
                            <stop stopColor="#3650B2" />
                            <stop offset="0.02" stopColor="#3650B2" />
                            <stop offset="0.22" stopColor="#3F5BC9" />
                            <stop offset="0.45" stopColor="#4563DA" />
                            <stop offset="0.69" stopColor="#4968E4" />
                            <stop offset="0.99" stopColor="#4A6AE7" />
                            <stop offset="1" stopColor="#4A6AE7" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3d5fd9] text-[10px] text-nowrap tracking-[1px] uppercase">
                <p className="leading-[16px] whitespace-pre">{c.author}</p>
              </div>
              <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6f7588] text-[10px] text-nowrap tracking-[1px] uppercase">
                <p className="leading-[16px] whitespace-pre">- {c.date}</p>
              </div>
            </div>
          ) : (
            <div className="content-stretch flex gap-[8px] items-end leading-[0] not-italic relative shrink-0 text-nowrap">
              <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center relative shrink-0 text-[#25262c] text-[14px] tracking-[0.28px]">
                <p className="leading-[20px] text-nowrap whitespace-pre">{c.author}</p>
              </div>
              <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center relative shrink-0 text-[#6f7588] text-[10px] tracking-[1px] uppercase">
                <p className="leading-[16px] text-nowrap whitespace-pre">- {c.date}</p>
              </div>
            </div>
          )}

          {/* Comment Text or Edit Mode */}
          {editingId === c.id ? (
            <div className="w-full flex flex-col gap-[12px]">
              <div className="bg-white max-h-[118px] relative rounded-[8px] shrink-0 w-full">
                <div className="flex flex-row items-center max-h-inherit overflow-clip rounded-[inherit] size-full">
                  <textarea
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="box-border content-stretch flex gap-[8px] items-start max-h-inherit px-[16px] py-[10px] relative w-full resize-none bg-transparent border-none outline-none font-['Prompt:Light',_sans-serif] leading-[20px] text-[#25262c] text-[14px] tracking-[0.28px]"
                    rows={3}
                    autoFocus
                  />
                </div>
                <div aria-hidden="true" className="absolute border-4 border-[#dee7fb] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </div>
              
              <div className="content-stretch flex gap-[16px] items-start justify-end relative shrink-0">
                <button
                  onClick={handleCancelEdit}
                  className="content-stretch flex items-start relative rounded-[8px] shrink-0 hover:bg-[#f5f6f8] transition-colors"
                >
                  <div aria-hidden="true" className="absolute border border-[#3d5fd9] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  <div className="box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0">
                    <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#3d5fd9] text-[12px] text-nowrap tracking-[0.24px] whitespace-pre">Cancelar</p>
                  </div>
                </button>
                
                <button
                  onClick={() => handleSaveEdit(c.id)}
                  disabled={!editText.trim()}
                  className={`content-stretch flex items-start relative shrink-0 ${
                    editText.trim() ? 'hover:bg-[#3451c4] cursor-pointer' : 'opacity-50 cursor-not-allowed'
                  } transition-colors`}
                >
                  <div className="bg-[#3d5fd9] box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0">
                    <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-nowrap text-white tracking-[0.24px] whitespace-pre">Salvar</p>
                  </div>
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#6f7588] text-[14px] tracking-[0.28px] w-[min-content]">
                <p className="leading-[20px]">{c.text}</p>
              </div>
              
              {/* Action Buttons - Only for non-system comments */}
              {!c.isSystem && (
                <div className="content-stretch flex gap-[32px] items-start relative shrink-0">
                  <button 
                    onClick={() => handleEdit(c.id)}
                    className="content-stretch flex items-start relative rounded-[8px] shrink-0 hover:opacity-70 transition-opacity"
                  >
                    <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[8px] shrink-0">
                      <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#3d5fd9] text-[12px] text-nowrap tracking-[0.24px] whitespace-pre">Editar</p>
                    </div>
                  </button>
                  <button 
                    onClick={() => handleDeleteClick(c.id)}
                    className="content-stretch flex items-start relative rounded-[8px] shrink-0 hover:opacity-70 transition-opacity"
                  >
                    <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[8px] shrink-0">
                      <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#3d5fd9] text-[12px] text-nowrap tracking-[0.24px] whitespace-pre">Excluir</p>
                    </div>
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      ))}

      {/* Delete Confirmation Modal */}
      <DeleteCommentModal
        isOpen={deleteModalOpen}
        onCancel={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
}
