<script setup>

</script>

<template>
    <section class="mb-10 flex flex-col justify-between gap-6 sm:gap-10 md:gap-10 lg:flex-row">
        <!-- image - start -->
        <div class="overflow-hidden rounded-lg bg-gray-100 shadow-lg aspect-w-16 aspect-h-9 p-3 lg:w-7/12">
            <img src="https://fastly.picsum.photos/id/8/5000/3333.jpg?hmac=OeG5ufhPYQBd6Rx1TAldAuF92lhCzAhKQKttGfawWuA"
                loading="lazy" alt="Photo by Fakurian Design" class="h-full w-full object-cover object-center" />
        </div>
        <!-- image - end -->

        <!-- content - start -->
        <div class="flex flex-col gap-4 justify-center sm:text-center md:gap-6 lg:text-left lg:w-5/12">
            <div class="flex flex-col gap-2">
                <div class="flex justify-center gap-2.5 lg:justify-start">
                    <span
                        class="items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">Laravel</span>
                    <span
                        class="items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">Vuejs</span>
                    <span
                        class="items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">Tailwind</span>
                    <span
                        class="items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">Inertia</span>
                </div>
                <h1 class="text-4xl font-bold text-center text-black sm:text-5xl md:text-6xl lg:text-start">
                    Web Dev App
                </h1>
            </div>

            <p class="text-center leading-relaxed text-gray-500 lg:text-start xl:text-lg">This is a
                section of some simple filler text, also known as placeholder text. It shares some characteristics of a
                real
                written text but is random.</p>

            <div class="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
                <a href="#"
                    class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Source
                    code</a>
                <a href="#"
                    class="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">Preview</a>
            </div>
        </div>
        <!-- content - end -->
    </section>

    <section class="flex flex-col gap-6">
        <!-- content - start -->
        <div class="flex flex-col gap-4">
            <h2 class="font-bold text-4xl">Latar Belakang</h2>
            <div class="flex flex-col gap-2 text-justify">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque libero porro culpa
                    provident molestiae,
                    soluta, fugit nostrum dolor magnam commodi fuga veritatis distinctio voluptatibus, aspernatur quam autem
                    ex
                    velit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, dignissimos deleniti! Odio,
                    voluptates placeat dolorum asperiores nisi sapiente, odit eveniet quos et totam vel, repudiandae officia
                    exercitationem. Eum, asperiores alias? </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maiores consectetur molestias non, a
                    reiciendis assumenda et nam fugiat mollitia dicta fuga eaque voluptatem iusto minus distinctio quia?
                    Voluptatum, maiores?</p>
            </div>
        </div>
        <!-- content - end -->

        <!-- content - start -->
        <div class="flex flex-col gap-4">
            <h2 class="font-bold text-4xl">Latar Belakang</h2>
            <div class="flex flex-col gap-2 text-justify">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque libero porro culpa
                    provident molestiae,
                    soluta, fugit nostrum dolor magnam commodi fuga veritatis distinctio voluptatibus, aspernatur quam autem
                    ex velit amet. </p>
                <ul class="list-disc ml-6">
                    <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus quos rerum doloremque repellat
                        distinctio tempora ipsa expedita ex sit, iusto est deserunt labore quaerat quidem modi laborum
                        provident fugiat praesentium?</li>
                    <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus quos rerum doloremque repellat
                        distinctio tempora ipsa expedita ex sit, iusto est deserunt labore quaerat quidem modi laborum
                        provident fugiat praesentium?</li>
                    <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus quos rerum doloremque repellat
                        distinctio tempora ipsa expedita ex sit, iusto est deserunt labore quaerat quidem modi laborum
                        provident fugiat praesentium?</li>
                </ul>
            </div>
        </div>
        <!-- content - end -->
    </section>
</template>