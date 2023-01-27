export default function Footer({length}) {
    const today = new Date();
  return (
    <footer>
      <p>{length} List {length === 1 ? "item":"items"}</p>
      <br/>Copyright &copy;{today.getFullYear()}</footer>
  )
}
