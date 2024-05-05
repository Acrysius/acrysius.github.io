<h1 class="text-secondary fw-bold">POVZETEK VAŠEGA NAROČILA</h1>
    <p class="fs-4">
        Ime in priimek: <?php echo $_POST['ime'] . ' ' . $_POST['priimek'];?><br>
        Naslov: <?php echo $_POST['naslov'].', '.$_POST['postna'].' '.$_POST['mesto'];?><br>
        E-pošta: <?php echo $_POST['eposta'];?><br>
        Izbor krompirjeve vreče: <?php echo $_POST['vrsta'].' krompir, '.$_POST['teza'].' KG.';?>
    </p>