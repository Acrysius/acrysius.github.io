<!DOCTYPE html>
<html lang="en">
<head>
    <title>Krompirjevi oboževalci</title>
    <?php include 'includes/head.html';?>
</head>
<body>
<?php include 'includes/navbar.html';?>

   <section class="container-fluid bg-tertiary py-5">
        <article class="container text-center">
            <?php if($_SERVER['REQUEST_METHOD']==='POST'){
                include 'includes/narocilo.php'; 
            } else {
                include 'includes/hitri_log.php';
            }?>
                
        </article>
        
        <div class="container text-center">
            <hr>
            <h1 class="text-secondary fw-bold">RADI IMAMO KROMPIR</h1>
            <p class="fs-4">In to je vse kar je važno. Naj vas navduši Njegova škrobost!</p>
    
        </div>
    </section>

    <?php include 'includes/footer.html';?>
</body>
</html>