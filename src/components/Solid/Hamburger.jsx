export function Hamburger(props) {

  const handleClick = () => {
    props.open = !props.open
  }
  return (
    <div class="hamburger" onClick={handleClick}>
      <span class="h-1 w-10 bg-orange-500 block mb-2"></span>
      <span class="h-1 w-10 bg-orange-500 block mb-2"></span>
      <span class="h-1 w-10 bg-orange-500 block"></span>
    </div>
  )
}
