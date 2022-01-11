

import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from "@ngrx/data";
import { Lesson } from "../model/lesson";


@Injectable()
export class LessonEntityService extends EntityCollectionServiceBase<Lesson> {

    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Lesson', serviceElementsFactory)
    }


}
