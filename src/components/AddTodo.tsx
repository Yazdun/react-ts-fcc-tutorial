export const AddTodo = () => {
  // 設定 input 值的狀態

  const handleSubmit = () => {}
  const handleInput = () => {}

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center w-full max-w-lg gap-2 p-5 m-auto">
        <input
          onChange={handleInput}
          type="text"
          className="w-full px-5 py-2 bg-transparent border-2 outline-none border-zinc-600 rounded-xl placeholder:text-zinc-500 focus:border-white"
          placeholder="輸入你的待辦事項 ..."
        />
        <button
          type="submit"
          className="px-5 py-2 text-sm font-normal text-blue-300 bg-blue-900 border-2 border-blue-900 active:scale-95 rounded-xl"
        >
          Submit
        </button>
      </div>
    </form>
  )
}
