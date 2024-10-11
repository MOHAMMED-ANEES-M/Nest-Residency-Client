import React from 'react'

const Divider = () => {
  return (
    <div class="relative m-10">
      <div class="absolute inset-0 flex items-center">
        <div class="w-full border-t-2 border-[#912501]"></div>
      </div>
      <div class="relative flex justify-center items-center">
        <span class="bg-[#f8f8f8] px-3 pb-1 text-xl font-semibold text-[#912501]">
          • • •
        </span>
      </div>
    </div>
  )
}

export default Divider
