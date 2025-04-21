let componentCount = 2;

document.getElementById('add-component').addEventListener('click', function () {
    const container = document.getElementById('component-rows');

    const newComponent = `
        <!-- Component ${componentCount} START -->
        <div class="col-lg-9 mt-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Komponent Nummer ${componentCount}</h5>
                    <div class="d-flex">
                        <div class="button-cool col-lg-6">
                            <button>Intet komponent valgt..</button>
                        </div>
                        <div class="col-lg-6 ps-4">
                            <img src="" class="img-fluid mt-4" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-3 mt-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Vælg komponent</h5>
                    <div class="button-cool">
                        <button class="toggle-dropdown-button" type="button">
                            Vælg
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Component ${componentCount} END -->
    `;

    container.insertAdjacentHTML('beforeend', newComponent);
    componentCount++;
});