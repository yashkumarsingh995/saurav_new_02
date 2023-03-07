 let wrapper = document.getElementById('slide-wrap')
        if(wrapper){
          let start = document.getElementById('start_btn')
        let back = document.getElementById('back_all')
        let back2_start = document.getElementById('back2_start')
        let tw = wrapper.offsetWidth;
        let all_el = wrapper.querySelectorAll('.slide')
        let all_el_tw = 0;
        let el_w;
        let id = 0;
        Array.from(all_el).forEach((el,index)=>{
          el_w = el.offsetWidth;
          all_el_tw += el.offsetWidth;
          el.setAttribute('id',`slide-${index}`)
        })

        let freeWidth = (tw - all_el_tw)
        let nextBtn = wrapper.querySelectorAll('.next_btn > img')
        Array.from(nextBtn).forEach((nbtn)=>{
          nbtn.addEventListener('click',(e)=>{
            let parent_slide = e.target.parentNode.parentNode.parentNode;
            let parent_id = parent_slide.id; 
            //console.log(parent_id);
            parent_slide.classList.remove('expanded');
            //parent_slide.style.width = `${el_w}px`;
	    parent_slide.style.width = `170px`;
            let nextSlide = document.getElementById(`slide-${id}`);
            nextSlide.style.width = `${el_w + freeWidth + 200}px`;
            nextSlide.classList.add('expanded')
            id++
          })
        })
        let prevBtn = wrapper.querySelectorAll('.prev_btn > img')
        Array.from(prevBtn).forEach((pbtn)=>{
          pbtn.addEventListener('click',(e)=>{
            let parent_slide = e.target.parentNode.parentNode.parentNode;
            let parent_id = parent_slide.id;
            parent_slide.classList.remove('expanded');
            parent_slide.style.width = `${el_w}px`;
            let prevSlide = document.getElementById(`slide-${id - 2}`);
            prevSlide.style.width = `${el_w + freeWidth + 100}px`;
            prevSlide.classList.add('expanded')
            id--
          })
        })
        start.addEventListener('click',()=>{
          let firstSlide = document.getElementById('slide-0')
          firstSlide.classList.add('expanded')
          firstSlide.style.width = `${el_w + freeWidth + 128}px`;
          wrapper.style.zIndex = '999'
          id++
        })
        back.addEventListener('click',()=>{
          Array.from(all_el).forEach((el,index)=>{
             if(el.classList.contains('expanded')){
               el.classList.remove('expanded')
               el.style.width = `${el_w}px`;
             }
           })
          setTimeout(()=>{
            wrapper.style.zIndex = '9';
            id = 0;
          },1500) 
        });
        back2_start.addEventListener('click',()=>{
          Array.from(all_el).forEach((el,index)=>{
             if(el.classList.contains('expanded')){
               el.classList.remove('expanded')
               el.style.width = `${el_w}px`;
             }
           })
          setTimeout(()=>{
            wrapper.style.zIndex = '9';
            id = 0;
          },1500) 
        });
        };