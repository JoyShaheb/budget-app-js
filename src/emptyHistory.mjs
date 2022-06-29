export let emptyComponent = () => {
  return `
        <div class="emptyHistory">
          <div class="emptyHistory--title fw-light">No transaction done</div>
          <img class="emptyHistory--image" src="src/images/empty.svg" alt="">
        </div>
  `;
};
