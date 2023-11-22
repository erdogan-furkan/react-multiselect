import MultiSelect from "./components/ui/multi-select";
import classes from "./styles.module.scss";

function App() {
  const data = [
    "Edebiyat &amp; Romanlar",
    "Gerilim filmleri",
    "Çocuk kitapları",
  ]

  const regulatedData = data.map(item => ({value: item, label: item}))

  return (
    <div className={classes.wrapper}>
      <MultiSelect items={regulatedData} title="Kategoriler" />
    </div>
  );
}

export default App;
