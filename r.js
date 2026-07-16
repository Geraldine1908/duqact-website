const counters = document.querySelectorAll('.counter');
const speed = 200; // lower = faster

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target'); // convert to number
    const count = +counter.innerText;

    // calculate increment
    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 20); // repeat every 20ms
    } else {
      counter.innerText = target.toLocaleString(); // format nicely with commas
    }
  };

  updateCount();
});
